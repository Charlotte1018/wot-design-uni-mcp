import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** 项目根目录 */
export const PROJECT_ROOT = join(__dirname, '../..');

/** 提取数据存储目录 */
export const EXTRACTED_DATA_DIR = join(PROJECT_ROOT, 'componentData');

/** 组件数据目录 */
export const EXTRACTED_COMPONENTS_DATA_PATH = join(EXTRACTED_DATA_DIR, 'components');

/** 组件列表索引文件 */
export const EXTRACTED_COMPONENTS_LIST_PATH = join(EXTRACTED_DATA_DIR, 'components-index.json');

/** 元数据文件 */
export const EXTRACTED_METADATA_PATH = join(EXTRACTED_DATA_DIR, 'metadata.json');

/** 组件文档文件名 */
export const DOC_FILE_NAME = 'docs.md';

/** 组件示例文件名 */
export const EXAMPLE_FILE_NAME = 'examples.md';

