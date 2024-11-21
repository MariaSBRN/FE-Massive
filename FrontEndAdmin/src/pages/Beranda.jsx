// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Chart from 'chart.js/auto'; // Ensure you have installed chart.js
import "../assets/css/admin.css";

const Beranda = () => {
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedMonth, setSelectedMonth] = useState('01');
    const canvasRef = useRef(null);

    // Chart data, update as per selected month/year
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Hasil Panen (Ton)',
                data: [15, 16, 16.5, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                backgroundColor: '#7AB434',
                hoverBackgroundColor: '#6E9C2E',
                barPercentage: 0.7,
                categoryPercentage: 0.7,
                borderRadius: 4,
            },
        ],
    };

    // Initialize and update chart
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Cleanup on unmount
        return () => chart.destroy();
    }, [selectedYear, selectedMonth]);

    // Handlers for dropdown changes
    const handleYearChange = (e) => setSelectedYear(e.target.value);
    const handleMonthChange = (e) => setSelectedMonth(e.target.value);

    return (
        <div className="content-wrapper">
            <Sidebar />
            <div className="content" id="content">
                <div className="header">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                    <div className="profile">
                        <i className="fas fa-user-circle" aria-hidden="true"></i> Profil Saya <i className="fas fa-caret-down" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="dashboard-content">
                    <h2>Dashboard Pertanian</h2>
                    <div className="dashboard-cards">
                        {/* Cards */}
                        <div className="dashboard-card">
                            <i className="fas fa-tractor" aria-hidden="true"></i>
                            <h3>Alat Tani</h3>
                            <p>30 Alat Tani Kelompok</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-thumbs-up" aria-hidden="true"></i>
                            <h3>Alat Available</h3>
                            <p>20 Alat Tersedia Hari Ini</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-clipboard-list" aria-hidden="true"></i>
                            <h3>Proyek Tani</h3>
                            <p>3 Proyek Sedang Berlangsung</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-tag" aria-hidden="true"></i>
                            <h3>Pupuk Subsidi</h3>
                            <p>5 Jenis Pupuk Subsidi Tersedia</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-seedling" aria-hidden="true"></i>
                            <h3>Bibit Gratis</h3>
                            <p>5 Jenis Bibit Gratis Tersedia</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-user-friends" aria-hidden="true"></i>
                            <h3>Anggota Kelompok</h3>
                            <p>13 Anggota Kelompok</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-chart-bar" aria-hidden="true"></i>
                            <h3>Hasil Tani</h3>
                            <p>20 Ton Tomat Proyek Terakhir</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                        <div className="dashboard-card">
                            <i className="fas fa-newspaper" aria-hidden="true"></i>
                            <h3>Artikel</h3>
                            <p>100 Artikel Pembelajaran</p>
                            <a href="#"><u>See Details</u></a>
                        </div>
                    </div>

                    <div className="dashboard-chart">
                        <h2>Grafik Hasil Panen Bulanan</h2><br />

                        {/* Dropdowns for year and month selection */}
                        <div className="mt-4">
                            <label htmlFor="year" className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Year</label>
                            <select
                                id="year"
                                value={selectedYear}
                                onChange={handleYearChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            >
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="month" className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Month</label>
                            <select
                                id="month"
                                value={selectedMonth}
                                onChange={handleMonthChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            >
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>

                        {/* Chart Canvas */}
                        <div style={{ width: '100%', height: '400px' }}>
                            <canvas ref={canvasRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beranda;
