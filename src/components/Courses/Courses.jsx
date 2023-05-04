import React from 'react';

const Courses = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 text-center'>
            <div>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1683194809~exp=1683195409~hmac=3756326614bec27713cfe7f6d6943cefd0a65ceb7266bee754436d400dbca772" alt="" />
                    <div className='bg-gray-700 m-4 p-4 text-white opacity-0 absolute inset-0 hover:opacity-75 transition duration-300 ' >
                        <p className=' text-2xl mb-10'>Russian cuisine</p>
                        <p>Would you like to cook for a fine dining standerd??This course offers advance training</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1683196570~exp=1683197170~hmac=6ba3bcc69816e6f433fcf24dada23fce9cd2033fa55e0c6ac62431fa27333391" alt="" />
                    <div className='bg-gray-700 m-4 p-4 text-white opacity-0 absolute inset-0 hover:opacity-75 transition duration-300 ' >
                        <p className=' text-2xl mb-10'>Italian cuisine</p>
                        <p>Would you like to cook for a fine dining standerd??This course offers advance training</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1683194809~exp=1683195409~hmac=3756326614bec27713cfe7f6d6943cefd0a65ceb7266bee754436d400dbca772" alt="" />
                    <div className='bg-gray-700 m-4 p-4 text-white opacity-0 absolute inset-0 hover:opacity-75 transition duration-300 ' >
                        <p className=' text-2xl mb-10'>Russian cuisine</p>
                        <p>Would you like to cook for a fine dining standerd??This course offers advance training</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Courses;