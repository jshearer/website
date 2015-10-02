var ua = require('universal-analytics');
import unique_id from 'beaverbird';

var visitor = ua('UA-68213982-1', unique_id.uid(), {strictCidFormat: false});

export default visitor;