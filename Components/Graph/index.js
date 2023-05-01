import { useState, useEffect } from "react";
import styles from './Graph.module.css'

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
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
                {
                    label: 'Number of People',
                    data: [94300, 77100, 62100, 66500, 81000],
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
                    text: "Heavy Drinking from 2017 to 2021 (Ages 12-17)"
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