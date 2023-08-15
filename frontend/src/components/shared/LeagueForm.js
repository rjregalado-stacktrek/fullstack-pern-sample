// import React, { Component } from 'react';
// import './LeagueForm.css'; // Import the CSS file

// class LeagueForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             leagueId: '',
//             leagueName: '',
//             userId: '',
//             selectedDate: '',
//         };
//     }

//     handleInputChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value,
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Form data:', this.state);
//         // You can perform further actions here, such as sending the form data to a server.
//     }

//     render() {
//         return (
//             <div>
//                 <h2>League Data Form</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="leagueId">League ID:</label>
//                     <input
//                         type="text"
//                         id="leagueId"
//                         name="leagueId"
//                         value={this.state.leagueId}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <br />
//                     <label htmlFor="leagueName">League Name:</label>
//                     <input
//                         type="text"
//                         id="leagueName"
//                         name="leagueName"
//                         value={this.state.leagueName}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <br />
//                     <label htmlFor="userId">User ID:</label>
//                     <input
//                         type="text"
//                         id="userId"
//                         name="userId"
//                         value={this.state.userId}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <br />
//                     <label htmlFor="date">Select a Date:</label>
//                     <input
//                         type="date"
//                         id="date"
//                         name="selectedDate"
//                         value={this.state.selectedDate}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <br />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default LeagueForm;

import React, { Component } from 'react';

class LeagueForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: '',
            leagueName: '',
            userId: '',
            selectedDate: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', this.state);
        // You can perform further actions here, such as sending the form data to a server.
    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">League Data Form</h2>
                    <form onSubmit={this.handleSubmit} className="space-y-4">
                        <label htmlFor="leagueId" className="block font-medium">
                        League ID:
                        <input
                            type="text"
                            id="leagueId"
                            name="leagueId"
                            value={this.state.leagueId}
                            onChange={this.handleInputChange}
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </label>

                    <label htmlFor="leagueName" className="block font-medium">
                        League Name:
                        <input
                            type="text"
                            id="leagueName"
                            name="leagueName"
                            value={this.state.leagueName}
                            onChange={this.handleInputChange}
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </label>

                    <label htmlFor="userId" className="block font-medium">
                        User ID:
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={this.state.userId}
                            onChange={this.handleInputChange}
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </label>

                    <label htmlFor="date" className="block font-medium">
                        Select a Date:
                        <input
                            type="date"
                            id="date"
                            name="selectedDate"
                            value={this.state.selectedDate}
                            onChange={this.handleInputChange}
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </label>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LeagueForm;
