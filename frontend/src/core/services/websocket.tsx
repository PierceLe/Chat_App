class WebSocketClient {
  private static instance: WebSocketClient;
  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 100;
  private reconnectInterval = 1000;
  private listeners: ((data: any) => void)[] = [];

  private constructor() {
    this.connect();
  }

  public static getInstance(): WebSocketClient {
    if (!WebSocketClient.instance) {
      WebSocketClient.instance = new WebSocketClient();
    }
    return WebSocketClient.instance;
  }

  private connect() {
    this.socket = new WebSocket("ws://localhost:9990/chat/ws");

    this.socket.onopen = () => {
      console.log("Connected to WebSocket server");
      this.reconnectAttempts = 0;
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.listeners.forEach((callback) => callback(data));
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
      this.handleReconnect();
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);

    };
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      const delay =
        this.reconnectInterval * Math.pow(2, this.reconnectAttempts); // Exponential backoff
      console.log(
        `Reconnecting in ${delay / 1000} seconds... (Attempt ${this.reconnectAttempts + 1}/${this.maxReconnectAttempts})`,
      );

      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, delay);
    } else {
      console.error("Max reconnect attempts reached. Giving up.");
    }
  }

  public onMessage(callback: (data: any) => void) {
    this.listeners.push(callback);
  }

  public offMessage(listener: (data: any) => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  public send(data: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error("WebSocket is not connected");

    }
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close();
      this.reconnectAttempts = this.maxReconnectAttempts;
    }
  }

  public isConnected(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }
}

export const wsClient = WebSocketClient.getInstance();
