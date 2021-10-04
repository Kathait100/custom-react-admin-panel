import React from 'react'
import './Featured.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Featured() {
    return (
        <div className = "featured-info">
            <div className="featured-item">
                <span className="featuredTitle">Revenue</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2000</span>
                            <span className="featuredMoneyRate">-533<ArrowDownwardIcon className = "featuredIcon negative" /></span>
                        </div>
                    <span className = "FeaturedSub">Compared To Last Month</span>
            </div>
            <div className="featured-item">
                <span className="featuredTitle">Sales</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2400</span>
                            <span className="featuredMoneyRate">+53.3<ArrowUpwardIcon className = "featuredIcon " /></span>
                        </div>
                    <span className = "FeaturedSub">Compared To Last Month</span>
            </div>
            <div className="featured-item">
                <span className="featuredTitle">Cost</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$5000</span>
                            <span className="featuredMoneyRate">-82<ArrowDownwardIcon className = "featuredIcon negative" /></span>
                        </div>
                    <span className = "FeaturedSub">Compared To Last Month</span>
            </div>
        </div>
    )
}
