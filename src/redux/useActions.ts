import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalActions } from 'src/redux/reducers/modalReducer';

export function useActions() {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({ ...modalActions }, dispatch),
    [dispatch],
  );
}
