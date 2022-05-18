import React, { useState } from 'react'

const Home = () => {

    const BookName = [{ name: "science" }]
    const [Booklist, setBookList] = useState(BookName);


    // console.log('dj',Booklist)



    return (
        <div className='container'>
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className='table'>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <th scope="row">2</th>
                        {Booklist.map((el) => {
                            return (
                                <tr>
                                    <td>{el.name}</td>
                                </tr>
                            )
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Home


