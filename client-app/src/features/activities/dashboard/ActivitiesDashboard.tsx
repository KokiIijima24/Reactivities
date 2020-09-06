import React, { SyntheticEvent, useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/layout/models/activity'
import  ActivityDetails  from '../details/ActivityDetails'
import  ActivityForm  from '../form/ActivityForm'
import { observer } from 'mobx-react-lite'
import ActivityStore from '../../../app/stores/activityStore'
import ActivitiesList from './ActivitiesList'

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean,
  target: string
}

export const ActivitiesDashboard: React.FC<IProps> = ({
  selectActivity,
  setEditMode,
  setSelectedActivity,
  createActivity,
  editActivity,
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList
          deleteActivity={deleteActivity}
          submitting={submitting}
          target={target} />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectActivity && !editMode &&
          <ActivityDetails
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        }
        {editMode &&
          <ActivityForm
            // eslint-disable-next-line
            key={selectedActivity && selectedActivity.id || 0}
            setEditMdoe={setEditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
            submitting={submitting}
          />
        }
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivitiesDashboard);