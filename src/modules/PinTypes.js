import {Enum} from 'enumify';

class PinTypes extends Enum{}

PinTypes.initEnum([
    'PIN',
    'PLACEHOLDER',
    'PLACEHOLDER_1',
    'PLACEHOLDER_2',
    'PLACEHOLDER_3',
    'PLACEHOLDERS',

]); // Todo

export default PinTypes;