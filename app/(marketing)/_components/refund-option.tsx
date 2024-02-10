"use client";

import React, { useEffect, useState } from "react";
import { useFeatureFlagVariantKey } from "posthog-js/react";

const RefundOption = () => {
    const [landingCopy, setLandingCopy] = useState<string>("");

    const variant = useFeatureFlagVariantKey("refund_text");

    useEffect(() => {
        // Check for specific variant keys and set landingCopy accordingly
        if (variant === "show") {
            setLandingCopy("100% Refund within 7 days of purchase. No questions asked.");
        } else if (variant === "control") {
            setLandingCopy("");
        } else {
            setLandingCopy(""); // Set to empty or any default message you want for other cases
        }

    }, [variant]);

    return (
        <div>
            <p className='text-2xs mt-3 text-gray-700'>{landingCopy}</p>
        </div>
    );
}

export default RefundOption;
