import React from 'react';
import Column from './Column';
import { Task, TaskStatus, User } from '../types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface BoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  users: User[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadTasks: () => void;
}

const STATUSES = [
  TaskStatus.TODO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.REVIEW,
  TaskStatus.DONE,
];

const Board: React.FC<BoardProps> = ({ tasks, setTasks, users, loading, loadTasks, setLoading }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          width: '100%',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          opacity: loading ? 0.5 : 1,
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {STATUSES.map((status) => (
          <div
            key={status}
            style={{
              minWidth: '250px',
              display: 'inline-block',
              flexShrink: 0,
            }}
          >
            <Column
              status={status}
              tasks={tasks.filter((t) => t.status === status)}
              allTasks={tasks}
              setTasks={setTasks}
              users={users}
              loadTasks={loadTasks}
              setLoading={setLoading}
            />
          </div>
        ))}
      </div>

      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            backdropFilter: 'blur(2px)',
          }}
        >
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
      )}
    </div>
  );
};

export default Board;
