import { useState, useEffect } from "react";
import styles from './GraphC.module.css'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function Graph() {
    
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Teens", "Adults", "Seniors"],
            datasets: [
                {
                    label: 'Age Demographic',
                    data: [770000, 3465000, 77000],
                    borderColor: 'rgb(63, 157, 183)',
                    backgroundColor: 'rgba(63, 157, 183, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Cocaine Consumption in Canada"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    
    return(
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}