const Contact = () => {
    return (
        <div>
            <h1 className="flex justify-center font-bold text-3xl p-4 m-4">Contact Us ☎️</h1>
            <form className="flex justify-center">
                <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="Email" />
                <button className="bg-green-100 hover:bg-green-300 rounded-lg p-2 m-2">Submit</button>
            </form>
        </div>
    );
};
export default Contact;