import React from 'react';
import { useAppSelector } from '../../store/store';

interface IEnemysAliveProps {
    enemyImg: string
    enemyHp: number
    maxEnemyHp: number
    widthHpBar: number
}

const EnemysAlive = ({ enemyImg, enemyHp, maxEnemyHp, widthHpBar }: IEnemysAliveProps) => {
    const ischoiceActive = useAppSelector(state => state.FightReducer.ischoiceActive)
    
    return (
        <>
            <img className='enemys__content-img enemy' src={enemyImg} alt="img" />
            <div className="player__content-hp">
                <span style={{ width: `${widthHpBar}%` }}></span>
                <p>{enemyHp} / {maxEnemyHp}</p>
            </div>
            <div className="arrow-down" style={ischoiceActive ? {display: "block"}: {}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};

export default EnemysAlive;