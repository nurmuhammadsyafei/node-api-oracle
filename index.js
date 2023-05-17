const oracledb = require('oracledb');

const connectionConfig = {
    user: 'MANIS',
    password: 'password01',
    connectString: '10.146.1.79:1521/VP', // Contoh: 'localhost:1521/xe'
};

async function connectToDatabase() {
    let connection;

    try {
        connection = await oracledb.getConnection(connectionConfig);
        console.log('Koneksi berhasil');

        // Lakukan operasi database lainnya di sini

        const result = await connection.execute('SELECT * FROM z5_color');
        const data = result.rows;

        const jsonData = JSON.stringify(data);
        console.log(jsonData);

    } catch (error) {
        console.error('Koneksi gagal', error);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Koneksi ditutup');
            } catch (error) {
                console.error('Gagal menutup koneksi', error);
            }
        }
    }
}

connectToDatabase();