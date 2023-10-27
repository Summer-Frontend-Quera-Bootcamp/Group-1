import { MainLayout } from "../../Layout/MainLayout";
import BoardListView from "../../components/BoardListView";

const BoardListViewPage = () => {
  return (
    <>
      <MainLayout>
        <div className="max-h-screen">
          <BoardListView/>
        </div>
      </MainLayout>
    </>
  );
};

export default BoardListViewPage;
