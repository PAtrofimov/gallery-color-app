import { useMemo } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allActionCreators } from '../store/reducers/action-creators';

export function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export const useActions = () => {
   const dispatch = useDispatch();
   return bindActionCreators(allActionCreators, dispatch);
}
