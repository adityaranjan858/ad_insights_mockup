import AdInsightsTable from "./AdInsightsTable";
import ChartAndTable from "./ChartAndTable";

const Dashboard = () => {
  return (
    <>
    <div className='container-fluid mt-3'>
        <div className="row ">
          <div className="col-md-6">
          <AdInsightsTable/>
          </div>
          <div className="col-md-6">
          <ChartAndTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;