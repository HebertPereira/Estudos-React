import React from 'react'

function UserPage(){
    return(
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Type</th>
                <th scope="col">Column heading</th>
                <th scope="col">Column heading</th>
                <th scope="col">Column heading</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-active">
                <th scope="row">Active</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr>
                <th scope="row">Default</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserPage;