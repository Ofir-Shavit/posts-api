import {Client} from '@elastic/elasticsearch';
import config from '../config';

const esClient = new Client({node: `http://${config.elasticsearchHost}:${config.elasticsearchPort}`});

export {esClient};






