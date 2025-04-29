import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import { Task, User, TaskStatus } from './types';
import { Button, Modal, Form, Input, Select } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import httpRequest from '@/core/api/baseAxios';
import { notify } from '@/core/utils/notification';
import { UserData } from '@/core/services/contactService';
import { useSelector } from 'react-redux';
import { getMeSelector } from '@/core/redux/selectors';
import { RoomData } from '@/core/services/roomService';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const GroupTask = () => {
  const { roomId } = useParams<{ room_id: string }>();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [room, setRoom] = useState<RoomData>({});
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [loadingCreateTask, setLoadingCreateTask] = useState(false);
  const [form] = Form.useForm();

  const [isModalCreateTaskOpen, setIsModalCreateTaskOpen] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const userMe: UserData = useSelector(getMeSelector); 

  const loadUsers = async () => {
    try {
      const res = await httpRequest.get(`/room/user?room_id=${roomId}`);
      if (res.code === 0) {
        setUsers(res.result || []);
      } else {
        throw new Error("Failed to load users");
      }
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  };

  const loadRoomInfo = async () => {
    try {
      const res = await httpRequest.get(`/room/?room_id=${roomId}`);
      if (res.code === 0) {
        setRoom(res.result || []);
      } else {
        throw new Error("Failed to load room info");
      }
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  };

  const loadTasks = async () => {
    setLoadingRefresh(true);
    setHasError(false);
    try {
      const res = await httpRequest.get(`/task/tasks-by-room?room_id=${roomId}`);
      if (res.code === 0) {
        setTasks(res.result || []);
      } else {
        throw new Error("Failed to load tasks");
      }
    } catch (err) {
      console.error(err);
      setHasError(true);
    } finally {
      setLoadingRefresh(false);
    }
  };

  useEffect(() => {
    loadUsers();
    loadRoomInfo();
    loadTasks();
  }, [roomId]);

  const handleCreateTask = async () => {
    
    try {
      const values = await form.validateFields();
    } catch (error) {
      return
    }

    try {
      setLoadingCreateTask(true)
      const values = await form.validateFields();
      const res = await httpRequest.post('/task/create', {
        room_id: roomId,
        task_name: values.task_name,
        task_description: values.task_description,
        assigner_id: userMe.user_id,
        assignee_id: values.assignee_id,
        status: TaskStatus.TODO
      });
  
      if (res.code === 0) {
        notify.success('Task created successfully !');
        setIsModalCreateTaskOpen(false);
        form.resetFields();
      } else {
        throw new Error('Create task failed');
      }
    } catch (error) {
      console.log(error);
      notify.error('Error', 'Failed to create task');
    } finally {
      setLoadingCreateTask(false)
    }

    loadTasks();
  };


  if (hasError) {
    return (
      <div 
        style={{
          width: '90%',
          height: '90vh',
          overflowX: 'auto',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '5px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2>Get a list of Tasks that have encountered errors. Try reloading the page.</h2>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', margin: '20px' }}>
      <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: '15px', width: '90%' }}>
        <div>
          <span style={{fontSize: '1.2em'}}>Group</span>
          <span style={{fontWeight: 'bold', marginLeft: '10px', fontSize: '1.3em'}}>{room.room_name}</span>
          <span style={{fontSize: '1.2em', marginLeft: '5px'}}>-</span>
          <span style={{fontSize: '1.2em', marginLeft: '5px'}}>{users.length} members</span>
        </div>
        <div>
          <Button
            type="primary"
            ghost
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(`/group-chat/${roomId}`)}
            style={{marginRight: '5px'}}
          >
            Back
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalCreateTaskOpen(true)}
            loading={loadingCreateTask}
          >
            New Task
          </Button>
        </div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            width: '90%',
            height: '90vh',
            overflowX: 'auto',
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '5px', 
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Board
            tasks={tasks}
            setTasks={setTasks}
            users={users}
            loading={loadingUpdate || loadingRefresh}
            setLoading={setLoadingUpdate}
            onTaskUpdated={loadTasks}
          />
        </div>
      </DndProvider>
      <Modal
        title="Create New Task"
        open={isModalCreateTaskOpen}
        onCancel={() => setIsModalCreateTaskOpen(false)}
        onOk={handleCreateTask}
        okText="Create"
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Task Name"
            name="task_name"
            rules={[{ required: true, message: 'Please input task name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Task Description"
            name="task_description"
            rules={[{ required: true, message: 'Please input description' }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item
            label="Assign To"
            name="assignee_id"
            rules={[{ required: true, message: 'Please select an assignee' }]}
          >
            <Select
              placeholder="Select a user"
              allowClear
            >
              {users.map(user => (
                <Select.Option key={user.user_id} value={user.user_id}>
                  {user.first_name} {user.last_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GroupTask;
