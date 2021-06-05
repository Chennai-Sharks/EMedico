import React from 'react'
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import {	
	GetBFSection1FormProvider
} from '@emedico/shared';

const BFSection1FormGet = () => {
    const getBFSection1FormProvider = GetBFSection1FormProvider();
    console.log(getBFSection1FormProvider.data);
    return (
        <div>
            <CustomNavBar />
            
        </div>
    )
}

export default BFSection1FormGet;
