import React from 'react'
import { SheetsDirective, SheetDirective, RangesDirective, RangeDirective, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-grids/styles/material.css';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';


function DataAnalytics() {

  const spreadsheetRef = React.useRef(null);

  const handleSubmit = async() =>{
    console.log(spreadsheetRef.current);
  }

  return (
    <div className='data-analytics'>
        <SpreadsheetComponent
        allowOpen={true}
        allowSave={true}
        openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open'
        saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save'
        ref={spreadsheetRef}
        >
               <SheetsDirective>
                   <SheetDirective>
                       <RangesDirective>
                            <RangeDirective></RangeDirective>
                        </RangesDirective>
                    </SheetDirective>
                </SheetsDirective>
           </SpreadsheetComponent>

           <button onClick={handleSubmit} className="btn btn-md btn-dark my-5">Submit</button>
    </div>
  )
}

export default DataAnalytics

