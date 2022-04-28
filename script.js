const container = document.querySelector('#container')

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function displaySpaceCrafts() {
    fetch('https://isro.vercel.app/api/spacecrafts')
        .then((res) => res.json())
        .then((data) => {
            container.classList.add('mt-5', 'wl-50')
            removeAllChildNodes(container)
            const header = document.createElement('div')
            header.classList.add('fs-3', 'd-flex', 'justify-content-center')
            header.innerHTML = 'Space Crafts'
            container.appendChild(header)

            const table = document.createElement('table')
            table.classList.add('table', 'table-striped', 'table-hover', 'mt-5')
            container.appendChild(table)

            const thead = document.createElement('thead')
            table.appendChild(thead)

            const tr0 = document.createElement('tr')
            thead.appendChild(tr0)

            const th1 = document.createElement('th')
            th1.innerHTML = '#'
            th1.setAttribute('scope', 'col')
            tr0.appendChild(th1)

            const th2 = document.createElement('th')
            th2.innerHTML = 'Name'
            th2.setAttribute('scope', 'col')
            tr0.appendChild(th2)

            const tbody = document.createElement('tbody')
            table.appendChild(tbody)
            data.spacecrafts.forEach((element) => {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const th = document.createElement('th')
                th.innerHTML = element.id
                th.setAttribute('scope', 'row')
                tr.appendChild(th)

                const td1 = document.createElement('td')
                td1.innerHTML = element.name
                tr.appendChild(td1)
            })
        })
}

function displayLaunchers() {
    fetch('https://isro.vercel.app/api/launchers')
        .then((res) => res.json())
        .then((data) => {
            container.classList.add('mt-5', 'wl-50')
            removeAllChildNodes(container)
            const header = document.createElement('div')
            header.classList.add('fs-3', 'd-flex', 'justify-content-center')
            header.innerHTML = 'Launchers'
            container.appendChild(header)

            const table = document.createElement('table')
            table.classList.add('table', 'table-striped', 'table-hover', 'mt-5')
            container.appendChild(table)

            const thead = document.createElement('thead')
            table.appendChild(thead)

            const tr0 = document.createElement('tr')
            thead.appendChild(tr0)

            const th1 = document.createElement('th')
            th1.innerHTML = '#'
            th1.setAttribute('scope', 'col')
            tr0.appendChild(th1)

            const th2 = document.createElement('th')
            th2.innerHTML = 'Name'
            th2.setAttribute('scope', 'col')
            tr0.appendChild(th2)

            const tbody = document.createElement('tbody')
            table.appendChild(tbody)

            data.launchers.forEach((element, index) => {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const th = document.createElement('th')
                th.innerHTML = index + 1
                th.setAttribute('scope', 'row')
                tr.appendChild(th)

                const td1 = document.createElement('td')
                td1.innerHTML = element.id
                tr.appendChild(td1)
            })
        })
}

function displayCusSat() {
    fetch('https://isro.vercel.app/api/customer_satellites')
        .then((res) => res.json())
        .then((data) => {
            container.classList.remove('card', 'wl-50', 'p-0')
            container.classList.add('mt-5')
            removeAllChildNodes(container)
            const header = document.createElement('div')
            header.classList.add('fs-3', 'd-flex', 'justify-content-center')
            header.innerHTML = 'Customer Satellites'
            container.appendChild(header)

            const table = document.createElement('table')
            table.classList.add('table', 'table-striped', 'table-hover', 'mt-5')
            container.appendChild(table)

            const thead = document.createElement('thead')
            table.appendChild(thead)

            const tr0 = document.createElement('tr')
            thead.appendChild(tr0)

            const th0 = document.createElement('th')
            th0.innerHTML = '#'
            th0.setAttribute('scope', 'col')
            tr0.appendChild(th0)

            const th1 = document.createElement('th')
            th1.innerHTML = 'id'
            th1.setAttribute('scope', 'col')
            tr0.appendChild(th1)

            const th2 = document.createElement('th')
            th2.innerHTML = 'Country'
            th2.setAttribute('scope', 'col')
            tr0.appendChild(th2)

            const th3 = document.createElement('th')
            th3.innerHTML = 'Launch Date'
            th3.setAttribute('scope', 'col')
            tr0.appendChild(th3)

            const th4 = document.createElement('th')
            th4.innerHTML = 'Mass'
            th4.setAttribute('scope', 'col')
            tr0.appendChild(th4)

            const th5 = document.createElement('th')
            th5.innerHTML = 'Launcher'
            th5.setAttribute('scope', 'col')
            tr0.appendChild(th5)

            const tbody = document.createElement('tbody')
            table.appendChild(tbody)

            data.customer_satellites.forEach((element, index) => {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const th = document.createElement('th')
                th.innerHTML = index + 1
                th.setAttribute('scope', 'row')
                tr.appendChild(th)

                const td1 = document.createElement('td')
                td1.innerHTML = element.id
                tr.appendChild(td1)

                const td2 = document.createElement('td')
                td2.innerHTML = element.country
                tr.appendChild(td2)

                const td3 = document.createElement('td')
                td3.innerHTML = element.launch_date
                tr.appendChild(td3)

                const td4 = document.createElement('td')
                td4.innerHTML = element.mass
                tr.appendChild(td4)

                const td5 = document.createElement('td')
                td5.innerHTML = element.launcher
                tr.appendChild(td5)
            })
        })
}

function displayCenters() {
    fetch('https://isro.vercel.app/api/centres')
        .then((res) => res.json())
        .then((data) => {
            container.classList.remove('wl-50', 'p-0')
            container.classList.add('mt-5')
            removeAllChildNodes(container)
            const header = document.createElement('div')
            header.classList.add('fs-3', 'd-flex', 'justify-content-center')
            header.innerHTML = 'Centers'
            container.appendChild(header)

            const table = document.createElement('table')
            table.classList.add('table', 'table-striped', 'table-hover', 'mt-5')
            container.appendChild(table)

            const thead = document.createElement('thead')
            table.appendChild(thead)

            const tr0 = document.createElement('tr')
            thead.appendChild(tr0)

            const th1 = document.createElement('th')
            th1.innerHTML = '#'
            th1.setAttribute('scope', 'col')
            tr0.appendChild(th1)

            const th2 = document.createElement('th')
            th2.innerHTML = 'Name'
            th2.setAttribute('scope', 'col')
            tr0.appendChild(th2)

            const th3 = document.createElement('th')
            th3.innerHTML = 'Place'
            th3.setAttribute('scope', 'col')
            tr0.appendChild(th3)

            const th4 = document.createElement('th')
            th4.innerHTML = 'State'
            th4.setAttribute('scope', 'col')
            tr0.appendChild(th4)

            const tbody = document.createElement('tbody')
            table.appendChild(tbody)

            data.centres.forEach((element) => {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const th = document.createElement('th')
                th.innerHTML = element.id
                th.setAttribute('scope', 'row')
                tr.appendChild(th)

                const td1 = document.createElement('td')
                td1.innerHTML = element.name
                tr.appendChild(td1)

                const td2 = document.createElement('td')
                td2.innerHTML = element.Place
                tr.appendChild(td2)

                const td3 = document.createElement('td')
                td3.innerHTML = element.State
                tr.appendChild(td3)
            })
        })
}