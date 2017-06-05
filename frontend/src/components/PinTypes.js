import {Enum} from 'enumify';

class PinTypes extends Enum{}

PinTypes.initEnum([
    'HOME',
    'HOUSE',
    'PIN',
    'PLACEHOLDER',
    'PLACEHOLDER_1',
    'PLACEHOLDER_2',
    'PLACEHOLDER_3',
    'PLACEHOLDERS',

]);

export default PinTypes;