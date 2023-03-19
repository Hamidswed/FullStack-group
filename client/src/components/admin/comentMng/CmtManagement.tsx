import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAllComments } from "../../../redux/thunk/comment";
import { useSelector } from "react-redux";

const CmtManagement = () => {
  const allComments = useSelector(
    (state: RootState) => state.comment.allComments
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log(allComments, "all comments");
  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);

  return <div>comment</div>;
};
export default CmtManagement;
