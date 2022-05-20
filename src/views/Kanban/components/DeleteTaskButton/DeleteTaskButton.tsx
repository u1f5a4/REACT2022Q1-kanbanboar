import { SyntheticEvent } from 'react';

import s from './DeleteTaskButton.module.scss';
import g from '../../../../App.module.scss';
import { ActionType } from '../../../../Redux/interfaces/confirmationModal';
import { useAppDispatch } from '../../../../Redux/reduxHooks';
import { setSelectedColumnId, setSelectedTaskId } from '../../../../Redux/slices/boardSlice';
import { confirmationModalSlice } from '../../../../Redux/slices/confirmationModalSlice';

type Props = {
  columnId: string | undefined;
  taskId: string | undefined;
};

export const DeleteTaskButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const { setPortalVisible, setConfirmationModalType } = confirmationModalSlice.actions;

  const handleDeleteTask = async (e: SyntheticEvent) => {
    e.stopPropagation();
    const { columnId, taskId } = props;

    if (columnId && taskId) {
      dispatch(setSelectedColumnId(columnId));
      dispatch(setSelectedTaskId(taskId));
      dispatch(setPortalVisible(true));
      dispatch(setConfirmationModalType(ActionType.DELETE_TASK));
    }
  };

  return (
    <>
      <button onClick={handleDeleteTask} className={`${g.button} ${g.drop_shadow} ${s.delete}`}>
        X
      </button>
    </>
  );
};
