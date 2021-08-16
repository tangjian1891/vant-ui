import { withInstall } from '../utils/index';
import _Empty from './Empty';

const Empty = withInstall<typeof _Empty>(_Empty);

export default Empty;
export { Empty };
// 向外暴露一个install的
