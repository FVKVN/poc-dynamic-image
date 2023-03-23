import React, { useContext, useState } from 'react';

import { USER_STATE_CONTEXT } from './layout';

const baseClass = 'wizard';

function Wizard() {
    const { user, setUser } = useContext(USER_STATE_CONTEXT);
    return (
        <div className={baseClass}>
            { user.wizardStep === 1 && !user.image
                && <ImagePrompt user={user} setUser={setUser} />}
            { user.wizardStep === 2 && !user.job
                && <JobPrompt user={user} setUser={setUser} />}
            { user.wizardStep === 3 && !user.function
                && <FunctionPrompt user={user} setUser={setUser} />}
        </div>
    );
}

function ImagePrompt({
    user,
    setUser,
}) {
    const [imageSelected, setImageSelected] = useState(null);
    return (
        <div>
            <input
                type="file"
                onChange={selectImage}
                accept="image/*"
            />
            {imageSelected
                && (
                    <img
                        src={URL.createObjectURL(imageSelected)}
                        alt=""
                    />
                )}

            <button type="submit" onClick={confirmImage}>
                Confirm
            </button>
        </div>
    );

    function selectImage(e) {
        setImageSelected(e.target.files[0]);
    }

    function confirmImage() {
        setUser({ ...user, image: imageSelected, wizardStep: 2 });
        console.log(user);
    }
}

function JobPrompt({
    user,
    setUser,
}) {
    const [job, setJob] = useState('');
    return (
        <div>
            <input type="text" value={job} onChange={changeJob} />
            <button type="submit" onClick={confirmJob}>
                confirm
            </button>
        </div>
    );

    function changeJob(e) {
        setJob(e.target.value);
    }

    function confirmJob() {
        setUser({ ...user, job, wizardStep: 3 });
    }
}

function FunctionPrompt({
    user,
    setUser,
}) {
    const [userFunction, setUserFunction] = useState('');
    return (
        <div>
            <input type="text" value={userFunction} onChange={changeFunction} />
            <button type="submit" onClick={confirmFunction}>
                Confirm
            </button>
        </div>
    );

    function changeFunction(e) {
        setUserFunction(e.target.value);
    }

    function confirmFunction() {
        setUser({ ...user, function: userFunction, wizardStep: 3, complete: true });
    }
}

export default Wizard;
