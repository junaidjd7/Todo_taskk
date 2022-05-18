import React, { useState } from 'react';
import { data } from './data';
// import './style.css';
const Library = () => {

    const [libraryData, setLibraryData] = useState(data);
  
  
    const [readers, setReaders] = useState([]);
    const [dates, setdates] = useState('');

    const handleIssue = (id) => {
        let updatedarray = libraryData.filter((el) => {
            if (el.id === id) {
                setReaders([...readers, el]);
            } else {
                return el;
            }
        });
        setLibraryData(updatedarray);

    };
    const handleDate = (e, id) => {
        // console.log('e', e.target.value);

        let updatedAray = [...libraryData];
        let arr = updatedAray.map((row) => {
            if (row.id === id) {
                return { ...row, [e.target.name]: e.target.value };
            } else {
                return row;
            }
        });

        setLibraryData(arr);
    };
    const handleSearch = () => {
        if (searchdata === '') {
            return setLibraryData([]);
        } else {
            let filter = [...libraryData];
            let ab = filter.filter((row) =>
                row.BookName.toUpperCase().includes(searchdata.toUpperCase())
            );
            setLibraryData(ab);
            
        }
    };
    const handleSearchChange = (e) => {

        setsearchdata(e.target.value);
        if (e.target.value === '') {
            return setLibraryData(filterData);
        }
    };

    return (
        <div className="container">
            <div>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchdata}
                    onChange={handleSearchChange}
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={() => handleSearch()}
                    >
                    Search
                </button>
            </div>
            <div className="table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book list</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Publication date</th>
                            <th scope="col">Quality of book</th>
                            <th scope="col">Availabilty</th>
                            <th scope="col">issue date</th>
                            <th scope="col">Due date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libraryData.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td>{el.id}</td>
                                    <td>{el.BookName}</td>
                                    <td>{el.Author}</td>
                                    <td>{el.publicationDate}</td>
                                    <td>{el.QualityofBook}</td>
                                    <td>{el.Availability}</td>
                                    <td>
                                        <input
                                            type="date"
                                            name="issueDate"
                                            value={el.issueDate ? el.issueDate : ''}
                                            onChange={(e) => handleDate(e, el.id)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="date"
                                            name="dueDate"
                                            value={el.dueDate ? el.dueDate : ''}
                                            onChange={(e) => handleDate(e, el.id)}
                                        />
                                    </td>

                                    <button
                                        type="button"
                                        class="btn btn-secondary btn-lg"
                                        onClick={() => handleIssue(el.id)}
                                    >
                                        issue
                                    </button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="table">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book list</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Publication date</th>
                            <th scope="col">Quality of book</th>
                            <th scope="col">Availabilty</th>
                            <th scope="col">issue date</th>
                            <th scope="col">Due date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {readers &&
                            readers.map((el, index) => {
                                console.log('el', el);
                                return (
                                    <tr key={index}>
                                        <td>{el.id}</td>
                                        <td>{el.BookName}</td>
                                        <td>{el.Author}</td>
                                        <td>{el.publicationDate}</td>
                                        <td>{el.QualityofBook}</td>
                                        <td>{el.Availability}</td>
                                        <td>
                                            <input type="date" value={el.issueDate} />
                                        </td>
                                        <td>
                                            <input type="date" value={el.dueDate} />
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Library;