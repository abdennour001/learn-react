import React, { useState } from "react";
import axios from "axios";

const ArticleForm = () => {
    const [attachment, setAttachment] = useState(null);

    const token = "YWRtaW46YWRtaW4=";

    const handlePost = e => {
        e.preventDefault();

        const attachmentFormData = new FormData();
        attachmentFormData.append("nom", "test from axios");
        attachmentFormData.append("extension", "image");
        attachmentFormData.append("file", attachment, attachment.name);

        const formData = new FormData();
        formData.append("title", "test abdennour axios");
        formData.append("content", "test abdennour axios");
        formData.append("is_deleted", false);
        formData.append("is_validated", false);
        formData.append("publication_date", "2020-01-01T00:00:00Z");
        formData.append("attachment.nom", "attachmentFormData");
        formData.append("attachment.extension.", "image");
        formData.append("attachment.file", attachment, attachment.name);
        formData.append("editor", 1);

        const herokuURL =
            "https://cors-anywhere.herokuapp.com/https://corona-watch-api.herokuapp.com/corona-watch-api/v1/feeds/articles/";
        const baseURL =
            "http://127.0.0.1:8000/corona-watch-api/v1/feeds/articles/";

        axios
            .post(herokuURL, formData, {
                headers: {
                    Authorization: "Basic " + token,
                    Accept: "application/json",
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateAttachment = e => {
        setAttachment(e.target.files[0]);
    };

    return (
        <form encType="multipart/form-data">
            <div className="form-group">
                <input
                    type="file"
                    name="attachment"
                    onChange={updateAttachment}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handlePost}
            >
                Submit
            </button>
        </form>
    );
};

export default ArticleForm;
