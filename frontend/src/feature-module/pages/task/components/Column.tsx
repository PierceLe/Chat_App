import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { Task, TaskStatus, User } from '../types';
import httpRequest from '@/core/api/baseAxios';
import { notify } from '@/core/utils/notification';
import { CheckCircleOutlined } from '@ant-design/icons';

interface ColumnProps {
  status: TaskStatus;
  tasks: Task[];
  allTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  users: User[];
  onTaskUpdated: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Column: React.FC<ColumnProps> = ({ status, tasks, allTasks, setTasks, users, onTaskUpdated, setLoading }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: async (item: { id: string }) => {
      const currentTask = allTasks.find((task) => task.task_id === item.id);

      if (!currentTask) return;

      if (currentTask.status === status) return;
      try {
        setLoading(true);
        const res = await httpRequest.put(
          `/task/update-status?task_id=${encodeURIComponent(item.id)}&status=${encodeURIComponent(status)}`
        );
  
        if (res.code === 0) {
          onTaskUpdated();
          notify.success("Update Task status successfully !")
        } else {
          notify.error("Error", "Update status failed");
        }
      } catch (error) {
        notify.error("Error", "Update status failed");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      ref={drop}
      style={{
        flex: '0 0 auto',
        minWidth: '250px',
        padding: '1rem',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        minHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <h5 style={{ marginBottom: '5px', display: 'inline-flex', alignItems: 'center' }}>
        {status.replace('_', ' ').toUpperCase()}
        {status === TaskStatus.DONE && (
          <CheckCircleOutlined style={{ color: 'green', marginLeft: 8 }} />
        )}
      </h5>
      {tasks.map((task) => (
        <TaskCard key={task.task_id} task={task} users={users} />
      ))}
    </div>
  );
};

export default Column;
