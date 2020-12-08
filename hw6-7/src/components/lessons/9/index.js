import getDescriptionComponent from '../../taskDescription';
import raw from 'raw.macro';

import LiftingStateUpTask1 from './liftingStateUp/1';
import LiftingStateUpTask2 from './liftingStateUp/2';
import LiftingStateUpTask3 from './liftingStateUp/3';
import PropTypesTask1 from './propTypes/1';
import PropTypesTask2 from './propTypes/2';
import PropTypesTask3 from './propTypes/3';
import PropTypesTask4 from './propTypes/4';
import FragmentsTask1 from './fragments/1';
import FragmentsTask2 from './fragments/2';

const liftingStateUpTask1Description = getDescriptionComponent(
  raw('./liftingStateUp/1/README.md')
);
const liftingStateUpTask2Description = getDescriptionComponent(
  raw('./liftingStateUp/2/README.md')
);
const liftingStateUpTask3Description = getDescriptionComponent(
  raw('./liftingStateUp/3/README.md')
);
const propTypes1Description = getDescriptionComponent(
  raw('./propTypes/1/README.md')
);
const propTypes2Description = getDescriptionComponent(
  raw('./propTypes/2/README.md')
);
const propTypes3Description = getDescriptionComponent(
  raw('./propTypes/3/README.md')
);
const propTypes4Description = getDescriptionComponent(
  raw('./propTypes/4/README.md')
);
const fragments1Description = getDescriptionComponent(
  raw('./fragments/1/README.md')
);
const fragments2Description = getDescriptionComponent(
  raw('./fragments/2/README.md')
);

//map tasks to topics names
export default {
  liftingStateUp: [
    { task: LiftingStateUpTask1, description: liftingStateUpTask1Description },
    { task: LiftingStateUpTask2, description: liftingStateUpTask2Description },
    { task: LiftingStateUpTask3, description: liftingStateUpTask3Description },
  ],
  propTypes: [
    { task: PropTypesTask1, description: propTypes1Description },
    { task: PropTypesTask2, description: propTypes2Description },
    { task: PropTypesTask3, description: propTypes3Description },
    { task: PropTypesTask4, description: propTypes4Description },
  ],
  fragments: [
    { task: FragmentsTask1, description: fragments1Description },
    { task: FragmentsTask2, description: fragments2Description },
  ],
  /*common: [
    {task: CommonTask1, description: getDescriptionComponent(commonTask1Description)}
  ],*/
};
