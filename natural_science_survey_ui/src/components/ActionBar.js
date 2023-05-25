import React from 'react';
import { saveAs } from 'file-saver';
import { Button, Chip } from "@material-ui/core";

class ActionBar extends React.Component {

    exportToCSV = () => {
        const data = this.props.data.map((d) => Object.keys(d).reduce((arr, k, i) => { arr[i] = d[k].toString(); return arr }, []))
        const csvContent = data.map(row => row.join(',')).join('\n');
        const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        saveAs(csvBlob, new Date().toISOString() + '.csv');
    }

    render() {
        return (
            <Button onClick={this.exportToCSV}><Chip label="Export" color="primary" /></Button>
        );
    }
}

export default ActionBar;