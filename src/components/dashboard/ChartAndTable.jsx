import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import style from "./ChartAndTable.module.css"
import Button from '../common/Button';
import { Form } from 'react-bootstrap';

const ChartAndTable = () => {
    const [showChart, setShowChart] = useState(true);
    const [active, setActive] = useState(false)
    const [formData, setFormData] = useState({
        adInsightHeading: 'Select',
    });

    const toggleView = (view) => {
        setShowChart(view === 'chart');
        setActive(!active)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    const chartInstance = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (showChart) {
            const ctx = chartRef.current.getContext('2d');

            const data = {
                labels: ['40% Male', '35% Female', '25% Unknown'],
                datasets: [{
                    data: [40, 35, 25],
                    backgroundColor: ['#f9783d', '#4eaff1', '#043455'],
                }]
            };

            chartInstance.current = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {}
            });
        }
    }, [showChart]);

    const renderTable = () => {
        return <h4 className='text-center '>Render Table</h4>
    };

    return (
        <>
            <div className="table-responsive border-1 border rounded-3">
                <div className='bg-white p-2 border-bottom d-flex justify-content-between align-items-center'>
                <p className="mb-0" style={{ fontWeight: "500" }}>Ad Insights</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="">
                        <Form.Control
                            as="select"
                            className='py-0 px-1'
                            name="adInsightHeading"
                            value={formData.adInsightHeading}
                            onChange={handleChange}
                        >
                            <option value="Clicks">Clicks</option>
                            <option value="Cost">Cost</option>
                            <option value="Conversions">Conversions</option>
                            <option value="Revenue">Revenue</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                </div>
                <div>
                    {showChart ? (
                        <div className="d-flex">
                            <div className={style.doughnut}>
                                <canvas ref={chartRef}></canvas>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {renderTable()}
                        </div>
                    )}
                    <div className={style.togglebtns}>
                        <Button className={`p-0 ${style.toggle_chart_btn}`} onClick={() => toggleView('chart')}><i className={`fa-solid fa-chart-pie ${!active ? style.toggleIcons : style.toggleIcon}`}></i></Button>
                        <Button className={`p-0 ${style.toggle_table_btn}`} onClick={() => toggleView('table')}><i className={`fa-solid fa-table-list ${active ? style.toggleIcons : style.toggleIcon}`}></i></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartAndTable;
