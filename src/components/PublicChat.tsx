export const PublicChat = () => {
    return (
        <section>
            <h1>Public Chat</h1>
            <div className="container">
                <div className="row">
                    <h1>Chat example</h1>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="nav-header">Users in chat</p>
                        <ul id="users" className="list-group mb-3"></ul>
                    </div>
                    <div className="col-md-9">
                        <div className="row mb-3">
                            <input
                                id="msg_name"
                                className="col-md-3 form-control"
                                placeholder="Your nickname"
                                value="anonymous"
                            />
                            <input
                                id="msg_txt"
                                className="col-md-6 form-control"
                                placeholder="Enter your message"
                            />
                            <button
                                type="button"
                                id="msg_btn"
                                className="col-md-2 offset-md-1 btn btn-primary"
                            >
                                Send
                            </button>
                        </div>
                        <div id="board"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
