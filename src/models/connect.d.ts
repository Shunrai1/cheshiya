import type { MenuDataItem } from '@ant-design/pro-layout';
import type { EditPaperModelState } from './editPaper';
import type { QuestionModelState } from './question';
import type { TagModelState } from './tagsMap';
import type { UserModelState } from './user';

export interface Loading {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    menu?: boolean;
    user?: boolean;
    question?: boolean;
    tag?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  user: UserModelState;
  question: QuestionModelState;
  tag: TagModelState;
  editPaper: EditPaperModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
