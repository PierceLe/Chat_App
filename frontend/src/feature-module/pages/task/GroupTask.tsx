import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import { Task, User, TaskStatus } from './types';
import { Button, Modal, Form, Input, Select } from 'antd';
import { useParams } from 'react-router-dom';
import httpRequest from '@/core/api/baseAxios';
import { notify } from '@/core/utils/notification';

const GroupTask = () => {
  const { roomId } = useParams<{ room_id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);

  const [isModalCreateTaskOpen, setIsModalCreateTaskOpen] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

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
    loadTasks();
  }, [roomId]);


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
        <h2>An error occurred while loading data.</h2>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', margin: '20px' }}>
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
    </div>
  );
};

export default GroupTask;
