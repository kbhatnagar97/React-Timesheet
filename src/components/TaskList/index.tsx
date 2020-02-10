import * as React from 'react';
import './styles.scss';
import { IEntry } from '../NewEntrySheet';
import xx from "../../assets/cross-icon.svg"
interface ITaskListProps {
    entries: IEntry[];
    delete: (entry:IEntry) => void;
}
interface ITaskCardProps {
    entry: IEntry;
    delete: (entry:IEntry) => void;
}

export const TaskList: React.FC<ITaskListProps> = (props: ITaskListProps) => {
    const { entries } = props;
    function deleteCard(entry: IEntry) {
        props.delete(entry);
    }
    return (
        <div className="task-list">
            {entries.map((entry: IEntry) => (
                <TaskCard key={entry.id} delete={deleteCard} entry={entry} />
            ))}
        </div>
    );
};

const TaskCard: React.FC<ITaskCardProps> = (props: ITaskCardProps) => {
    const {
        entry: { task, hours, minutes, remarks},
    } = props;
    function deleteCard() {
        props.delete(props.entry);
    }
    return (
        <div className="task-card">
            
            <button onClick={deleteCard} className="cross-button"><img src={xx} width="10px" alt="cross"/></button>

            <div className="task-card-row1">
                <div className="task-title">{task}</div>
                <div className="task-time">{`${hours}h ${minutes}m`}</div>
            </div > 
            <div className="task-card-row2">
                {remarks}
            </div>
        </div>
    );
};
