import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import StateChangeStepper from './stateChangeStepper';
import SliderBar from './slider';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Toolbar = (props) => {
  const { getData, sendUpdate, history, id, offset } = props;
  return (
    <Tabs>
      <Tab label="Time Travel" >
        <div>
          <SliderBar
            getData={getData}
            sendUpdate={sendUpdate}
            history={history}
            id={id}
            offset={offset}
          />
        </div>
      </Tab>
      <Tab label="Undo/Redo" >
        <div>
          <StateChangeStepper />
        </div>
      </Tab>
      <Tab label="Dependency Tree">
        <div>
          <h2 style={styles.headline}>Plant Tree Here</h2>
          <p>
            And watch it grow!
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

Toolbar.propTypes = {
  getData: React.PropTypes.func,
  sendUpdate: React.PropTypes.func,
  history: React.PropTypes.array,
  id: React.PropTypes.string,
  offset: React.PropTypes.number
};

export default Toolbar;
