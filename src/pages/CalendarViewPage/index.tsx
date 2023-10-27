import { MainLayout } from "../../Layout/MainLayout";
import Calendar from "../../components/Calender";

const CalendarViewPage = () => {
  return (
    <>
      <MainLayout>
        <div className="max-h-screen">
          <Calendar />
        </div>
      </MainLayout>
    </>
  );
};

export default CalendarViewPage;
