import { ascendingForCampaign, ascendingOrder, descendingForCampaign, descendingOrder } from "../../features/adInsightsSlice"
import style from "./AdInsightsTable.module.css"
import {useDispatch, useSelector} from "react-redux"

const AdInsightsTable = () => {

    const data =  useSelector(state => state.adInsightsData.adData)
    const dispatch = useDispatch()

    const totalClicks = data.reduce((total, item) => total + item.clicks, 0).toLocaleString()
    const totalCost = data.reduce((total, item) => total + item.cost, 0).toLocaleString()
    const totalConversions = data.reduce((total, item) => total + item.conversions, 0).toLocaleString()
    const totalRevenue = data.reduce((total, item) => total + item.revenue, 0).toLocaleString()
  
    const downArrow=(field)=>{
      dispatch(ascendingOrder(field))
    }

    const upArrow = (field)=>{
      dispatch(descendingOrder(field))
    }

    const campaignDownArrow=(field)=>{
      dispatch(ascendingForCampaign(field))
    }
    const campaignUpArrow=(field)=>{
      dispatch(descendingForCampaign(field))
    }

    return (
      <>
        <div className="table-responsive border-1 border rounded-3">
          <p className="bg-white mb-0 border-bottom p-2"  style={{fontWeight: "500"}}>Ad Insights</p>
          <table className={`table bg-white ${style.table}`}>
            <thead>
              <tr>
                <th>
                  <h6 style={{justifyContent: "flex-start" }}>
                    Campaigns
                    <div className={style.upDownArrow}>
                      <i onClick={campaignDownArrow} className="fas fa-chevron-down "></i>
                      <i onClick={campaignUpArrow} className="fas fa-chevron-up "></i>
                    </div>
                  </h6>
                </th>
                <th>
                  <h6>
                    Clicks
                    <div className={style.upDownArrow}>
                      <i onClick={()=> downArrow("clicks")} className="fas fa-chevron-down"></i>
                      <i onClick={()=> upArrow("clicks")} className="fas fa-chevron-up"></i>
                    </div>
                  </h6>
                </th>
                <th>
                  <h6>
                    Cost
                    <div className={style.upDownArrow}>
                      <i onClick={()=> downArrow("cost")} className="fas fa-chevron-down"></i>
                      <i onClick={()=> upArrow("cost")} className="fas fa-chevron-up"></i>
                    </div>
                  </h6>
                </th>
                <th>
                  <h6>
                    Conversions
                    <div className={style.upDownArrow}>
                      <i onClick={()=> downArrow("conversions")} className="fas fa-chevron-down"></i>
                      <i onClick={()=> upArrow("conversions")} className="fas fa-chevron-up"></i>
                    </div>
                  </h6>
                </th>
                <th>
                  <h6>
                    Revenue
                    <div className={style.upDownArrow}>
                      <i onClick={()=> downArrow("revenue")} className="fas fa-chevron-down"></i>
                      <i onClick={()=> upArrow("revenue")} className="fas fa-chevron-up"></i>
                    </div>
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.campaign}</td>
                    <td className={style.alignData}>{item.clicks.toLocaleString()}</td>
                    <td className={style.alignData}>{`USD ${item.cost.toLocaleString()}`}</td>
                    <td className={style.alignData}>{item.conversions.toLocaleString()}</td>
                    <td className={style.alignData}>{`USD ${item.revenue.toLocaleString()}`}</td>
                  </tr>
              ))}
              <tr className={style.totalRow}>
                <td>Total</td>
                <td className={style.alignData}>{totalClicks}</td>
                <td className={style.alignData}>{totalCost}</td>
                <td className={style.alignData}>{totalConversions}</td>
                <td className={style.alignData}>{totalRevenue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default AdInsightsTable;
