import { useEffect } from 'react';
import { FunctionNoParamType } from 'modules/common/types';

export const useCallFuncIfCheckPassed = (check: boolean, func: FunctionNoParamType) => {
  useEffect(() => {
    if (check) {
      func();
    }
  }, [check]);
};
