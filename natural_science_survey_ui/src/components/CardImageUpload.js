import React, { forwardRef, useRef } from "react";
import {
    Box,
    Button,
    createSvgIcon,
    FormControl,
    FormHelperText,
    InputBase,
    Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import PropTypes from "prop-types";


const ImageUploaderIcon = createSvgIcon(
    // viewBox="0 0 28 28
    <path d="M22.9167 7.91683V12.1527C22.9167 12.1527 20.0975 12.1668 20.0833 12.1527V7.91683H15.8333C15.8333 7.91683 15.8475 5.09766 15.8333 5.0835H20.0833V0.833496H22.9167V5.0835H27.1667V7.91683H22.9167ZM18.6667 13.5835V9.3335H14.4167V5.0835H3.08333C1.525 5.0835 0.25 6.3585 0.25 7.91683V24.9168C0.25 26.4752 1.525 27.7502 3.08333 27.7502H20.0833C21.6417 27.7502 22.9167 26.4752 22.9167 24.9168V13.5835H18.6667ZM3.08333 24.9168L7.33333 19.2502L10.1667 23.5002L14.4167 17.8335L20.0833 24.9168H3.08333Z" />,
    "Image Uploader"
);

const useStyles = makeStyles(
    theme => (
        {
            root: {
                lineHeight: 1,
            },
            input: {
                display: "none"
            },
            image: {
                objectFit: "contain",
                height: 150
            },
            meta: {
                color: "rgba(0, 0, 0, 0.54)"
            },
            placeHolder: {
                border: "1px dashed #616161",
                borderRadius: 4,
                cursor: "pointer",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
                minHeight: 150,
                width: props => props.fullWidth ? undefined : 150,

                "&.error": {
                    borderColor: theme.palette.error.main
                }
            },
            placeHolderText: {
                textAlign: "center",
                userSelect: "none"
            },
        }
    )
);

const CardImageUpload = forwardRef(
    function CardImageUpload(props, ref) {
        const {
            className,
            disabled = false,
            error = false,
            FormHelperTextProps, // Props applied to the FormHelperText element.
            fullWidth,
            helperText, // The helper text content.
            hiddenLabel,
            id,
            imgSrc: src, /** @todo replace with src for all dependencies */
            imgHandler: onChange,  /** @todo replace with onChange for all dependencies */
            imageFormat,
            imageSpec,
            InputLabelProps,
            name, /** @todo add name prop to dependecies */
            removeImageHandler,
            required = false,
            title: label, /** @todo replace with label for all dependencies */
            tooltip
        } = props;

        const classes = useStyles(props);

        const inputRef = useRef();

        const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
        const inputLabelId = label && id ? `${id}-label` : undefined;

        const onClick = () => {
            if (!disabled) {
                inputRef.current.click();
            }
        };

        return (
            <FormControl
                className={clsx(classes.root, className)}
                disabled={disabled} // If true, the label, input and helper text should be displayed in a disabled state.
                error={error} // If true, the label should be displayed in an error state.
                fullWidth={fullWidth} // If true, the component will take up the full width of its container.
                hiddenLabel={hiddenLabel} // If true, the label will be hidden.
                ref={ref} // The ref is forwarded to the root element.
                required={required} // If true, the label will indicate that the input is required.
                variant="outlined"
                margin="dense"
            >
                <InputBase
                    aria-describedby={helperTextId}
                    className={clsx(classes.input)}
                    id={id}
                    inputProps={
                        {
                            accept: "image/*",
                        }
                    }
                    inputRef={inputRef}
                    name={name}
                    onChange={onChange}
                    type="file"
                />
                {
                    src
                        ? (
                            <Box className={classes.placeHolder}>
                                <Box
                                    alt={label}
                                    className={classes.image}
                                    component="img"
                                    onClick={onClick}
                                    src={src}
                                />
                                {
                                    typeof removeImageHandler === "function"
                                        ? (
                                            <Button
                                                color="primary"
                                                fullWidth
                                                onClick={removeImageHandler(inputRef)}
                                                // size="small"
                                                startIcon={<DeleteIcon />}
                                                variant="outlined"
                                            >
                                                {"remove"}
                                            </Button>
                                        )
                                        : null
                                }
                            </Box>
                        )
                        : (
                            <Box
                                className={
                                    clsx(
                                        classes.placeHolder,
                                        { error }
                                    )
                                }
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                onClick={onClick}
                            >
                                <ImageUploaderIcon
                                    fontSize="large"
                                    htmlColor="#616161"
                                    viewBox="0 0 28 28"
                                />
                                <Typography className={classes.placeHolderText} variant="body1">
                                    Upload Image
                                </Typography>
                            </Box>
                        )
                }
                {
                    imageSpec
                        ? (
                            <Typography className={classes.meta} style={{ marginTop: 8 }}>
                                {imageSpec}
                            </Typography>
                        )
                        : null
                }
                {
                    imageFormat
                        ? (
                            <Typography className={classes.meta}>
                                {imageFormat}
                            </Typography>
                        )
                        : null
                }
                {
                    // This helperText is reserved for error message
                    // We won't use it to display input description / hint.
                    // Input description / hint will be display by tooltip.
                    // https://v4.mui.com/api/form-helper-text/
                    helperText
                        ? (
                            <FormHelperText {...FormHelperTextProps} id={helperTextId} variant="outlined">
                                {helperText}
                            </FormHelperText>
                        )
                        : null
                }
            </FormControl>
        );
    }
);

CardImageUpload.propTypes = {
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * If `true`, the `input` element will be disabled.
     */
    disabled: PropTypes.bool,
    /**
    * If `true`, the label will be displayed in an error state.
    */
    error: PropTypes.bool,
    /**
     * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
     */
    FormHelperTextProps: PropTypes.object,
    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * The helper text content.
     */
    helperText: PropTypes.node,
    /**
     * @ignore
     */
    hiddenLabel: PropTypes.bool,
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id: PropTypes.string,
    imageFormat: PropTypes.string,
    imageSpec: PropTypes.string,
    imgSrc: PropTypes.any,
    imgHandler: PropTypes.func,
    /**
     * Props applied to the [`InputLabel`](/api/input-label/) element.
     */
    InputLabelProps: PropTypes.object,
    /**
     * Name attribute of the `input` element.
     */
    name: PropTypes.string,
    removeImageHandler: PropTypes.func,
    /**
     * If `true`, the label is displayed as required and the `input` element` will be required.
     */
    required: PropTypes.bool,
    title: PropTypes.any,
    /**
     * The input hint/description to be display in tooltip next to label
     */
    tooltip: PropTypes.string,
};

export default CardImageUpload;
