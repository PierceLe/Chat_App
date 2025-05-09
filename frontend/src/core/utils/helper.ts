import { BASE_FE_URL } from "@/environment";

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function getAvatarUrl(responseUrl: string | null): string | null {
  return responseUrl === 'default'
    ? 'assets/img/profiles/avatar-16.jpg'
    : responseUrl?.includes('bucket')
      ? `${BASE_FE_URL}/api/${responseUrl}`
      : responseUrl
}
