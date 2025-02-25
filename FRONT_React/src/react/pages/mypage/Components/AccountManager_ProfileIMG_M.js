import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cropper from "react-easy-crop";
import AxiosApi from "../../../../api/AxiosApi";
import { setLoginData } from "../../../../redux/slice/authSlice";

import {
  RightContainerTitle,
  RightProfileImage,
  HiddenInput,
  ProfileEditButton,
  ProfileModal,
  ProfileModalHeader,
  ProfileModalCloseButton,
  ProfileModalButton,
  ProfileModalTextContainer,
  ProfileModalButtonContainer,
  ProfileModalTitle,
  ProfileModalContents,
  ProfileModalImage,
  ProfileUploadModalContainer,
  ProfileUploadModalImage,
  ProfileCropModalContainer,
  ProfileCropContainer,
  ProfileCropOverlay,
  Backdrop,
  ProfileModalRotateButton,
  ProfileImageContainer,
} from "../../../styles/mypage/MyPage_ProfileIMG_M";

const AccountManager_ProfileIMG_M = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.auth.nickname);
  const profile = useSelector((state) => state.auth.profile);
  const [preview, setPreview] = useState(null); // 변경 프로필 이미지 용도
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedPreview, setCroppedPreview] = useState(null); // 미리보기 용도
  const [isProfileImgModalOpen, setIsProfileImgModalOpen] = useState(false);
  const [isProfileUploadModalOpen, setIsProfileUploadModalOpen] =
    useState(false);
  const [isProfileCropModalOpen, setIsProfileCropModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const fileInputRef = useRef(null);
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!preview) return;

    const img = new Image();
    img.src = preview;
    img.onload = () => {
      console.log("이미지 로드 완료:", img.naturalWidth, img.naturalHeight);
      const { naturalWidth, naturalHeight } = img;
      const minSize = Math.min(naturalWidth, naturalHeight); // 가장 짧은 쪽 선택
      setCropSize({ width: minSize, height: minSize }); // 동적 크롭 크기 설정
    };
  }, [preview, isProfileCropModalOpen]);

  useEffect(() => {
    if (croppedPreview) {
      setPreview(croppedPreview);
      console.log("이미지 : ", croppedPreview);
    }
  }, [croppedPreview]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleRotate = () => {
    setRotation((prev) => (prev - 90) % 360);
  };

  const convertUrlToFile = async (url, fileName) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], fileName, { type: "image/png" });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const finalImage = await convertUrlToFile(
      croppedPreview,
      `${nickname}_profile.png`
    );
    try {
      const formData = new FormData();
      formData.append("file", finalImage);
      formData.append("fileName", `${nickname}_profile.png`);

      const response = await AxiosApi.uploadprofile(formData);
      console.log(response);
      console.log(response.data);
      if (response.data) {
        alert("프로필 이미지 설정이 완료되었습니다.");
        setIsProfileUploadModalOpen(false);
        setIsProfileImgModalOpen(false);
        dispatch(setLoginData({ profile: response.data }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await AxiosApi.deleteprofile();
      if (response) {
        alert("프로필 이미지 삭제가 완료되었습니다.");
        dispatch(setLoginData({ profile: null }));
        setPreview(null);
        setCroppedPreview(null);
        setIsProfileImgModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveCroppedImage = () => {
    setPreview(croppedPreview); // 최종 크롭된 이미지 적용
    setIsProfileCropModalOpen(false); // CropModal 닫기
    setRotation(0);
  };

  const handleCrop = async () => {
    if (!croppedAreaPixels || !preview) return;

    const croppedImageURL = await getCroppedImg(
      preview,
      croppedAreaPixels,
      rotation
    );
    setCroppedPreview(croppedImageURL);
    handleSaveCroppedImage();
  };
  const getCroppedImg = async (imageSrc, croppedAreaPixels, rotation) => {
    return new Promise((resolve, reject) => {
      const newImage = new Image();
      newImage.src = imageSrc;
      newImage.crossOrigin = "anonymous"; // CORS 문제 방지
      newImage.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const radians = (rotation * Math.PI) / 180;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);

        const { width: imageWidth, height: imageHeight } = newImage;

        const rotatedWidth =
          Math.abs(imageWidth * cos) + Math.abs(imageHeight * sin);
        const rotatedHeight =
          Math.abs(imageWidth * sin) + Math.abs(imageHeight * cos);

        canvas.width = rotatedWidth;
        canvas.height = rotatedHeight;

        ctx.save();
        ctx.translate(rotatedWidth / 2, rotatedHeight / 2);
        ctx.rotate(radians);
        ctx.drawImage(
          newImage,
          -imageWidth / 2,
          -imageHeight / 2,
          imageWidth,
          imageHeight
        );
        ctx.restore();

        const cropX = croppedAreaPixels.x;
        const cropY = croppedAreaPixels.y;
        const cropWidth = croppedAreaPixels.width;
        const cropHeight = croppedAreaPixels.height;

        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");

        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;

        croppedCtx.drawImage(
          canvas,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          0,
          0,
          cropWidth,
          cropHeight
        );

        croppedCanvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas toBlob failed"));
            return;
          }
          resolve(URL.createObjectURL(blob)); // 실제로 이미지 넘길 때 파일 형태로 변환 필요
        }, "image/png");
      };

      newImage.onerror = (err) => reject(err);
    });
  };

  const resizeImage = (file, maxWidth = 300, maxHeight = 300) => {
    return new Promise((resolve) => {
      const resizingImage = new Image();
      resizingImage.src = URL.createObjectURL(file);
      resizingImage.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let { width, height } = resizingImage;

        if (width > maxWidth || height > maxHeight) {
          const scale = Math.min(maxWidth / width, maxHeight / height);
          width *= scale;
          height *= scale;
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(resizingImage, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/png");
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    fileInputRef.current.value = null;
    if (file) {
      const resizedBlob = await resizeImage(file);
      setPreview(URL.createObjectURL(resizedBlob));
      onClickProfileCropOpen(e);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    fileInputRef.current.value = null;
    if (file) {
      const resizedBlob = await resizeImage(file);
      setPreview(URL.createObjectURL(resizedBlob));
      onClickProfileCropOpen(e);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const onClickProfileOpen = () => {
    setIsProfileImgModalOpen(true);
  };
  const onClickProfileUploadOpen = () => {
    setIsProfileUploadModalOpen(true);
  };
  const onClickProfileCropOpen = () => {
    setIsProfileCropModalOpen(true);
  };
  const onClickProfileClose = () => {
    setIsProfileImgModalOpen(false);
  };
  const onClickProfileUploadClose = () => {
    setIsProfileUploadModalOpen(false);
    setPreview(null);
    setCroppedPreview(null);
    setRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const onClickProfileCropClose = () => {
    setIsProfileCropModalOpen(false);
    setPreview(null);
    setCroppedPreview(null);
    setRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // 모달 백드롭
  const ProfileModalComponent = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  };

  return (
    <>
 
        <ProfileImageContainer>
          <RightProfileImage
            isProfile={profile}
            isPreview={preview}
          ></RightProfileImage>
          <ProfileEditButton
            onClick={() => onClickProfileOpen()}
          ></ProfileEditButton>
        </ProfileImageContainer>


      {isProfileImgModalOpen && (
        <Backdrop onClick={onClickProfileClose}>
          <ProfileModal>
            <ProfileModalHeader>
              <ProfileModalCloseButton onClick={() => onClickProfileClose()} />
            </ProfileModalHeader>
            <ProfileModalTextContainer>
              <ProfileModalTitle>프로필 이미지</ProfileModalTitle>
              <ProfileModalContents>
                이미지를 추가하면 다른 사람이 나를 알아보기 쉬워지며
                <br />
                내가 계정에 로그인되어 있는지 확인할 수 있습니다.
              </ProfileModalContents>
            </ProfileModalTextContainer>
            <ProfileModalImage
              isProfile={profile}
              isPreview={preview}
            ></ProfileModalImage>

            <ProfileModalButtonContainer>
              {profile ? (
                <>
                  <ProfileModalButton
                    onClick={() => onClickProfileUploadOpen()}
                  >
                    프로필 이미지 변경
                  </ProfileModalButton>
                  <ProfileModalButton onClick={(e) => handleDelete(e)}>
                    프로필 이미지 삭제
                  </ProfileModalButton>
                </>
              ) : (
                <ProfileModalButton onClick={() => onClickProfileUploadOpen()}>
                  프로필 이미지 추가
                </ProfileModalButton>
              )}
            </ProfileModalButtonContainer>
          </ProfileModal>
        </Backdrop>
      )}

      {isProfileUploadModalOpen && (
        <Backdrop onClick={onClickProfileClose}>
          <ProfileModal>
            <ProfileModalHeader>
              <ProfileModalCloseButton
                onClick={() => onClickProfileUploadClose()}
              />{" "}
            </ProfileModalHeader>
            <ProfileModalButtonContainer>
              {!profile ? (
                <ProfileModalTitle>프로필 이미지 추가</ProfileModalTitle>
              ) : (
                <ProfileModalTitle>프로필 이미지 변경</ProfileModalTitle>
              )}
            </ProfileModalButtonContainer>
            <>
              <ProfileUploadModalContainer
                isDragging={isDragging}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="drag-overlay">여기에 놓으세요</div>

                {/* 이미지 영역 */}
                <ProfileUploadModalImage
                  isProfile={profile}
                  isPreview={preview}
                />

                <HiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />

                {!profile && !croppedPreview ? (
                  <ProfileModalTextContainer>
                    <ProfileModalTitle>여기로 이미지 드래그</ProfileModalTitle>
                    <ProfileModalContents>또는</ProfileModalContents>
                  </ProfileModalTextContainer>
                ) : croppedPreview ? (
                  <>
                    <ProfileModalContents>
                      적용된 프로필 이미지
                    </ProfileModalContents>
                  </>
                ) : (
                  profile && (
                    <>
                      <ProfileModalContents>
                        현재 프로필 이미지
                      </ProfileModalContents>
                    </>
                  )
                )}
              </ProfileUploadModalContainer>

              <ProfileModalButtonContainer>
                {!profile && !croppedPreview ? (
                  <ProfileModalButton
                    onClick={() => fileInputRef.current.click()}
                  >
                    업로드
                  </ProfileModalButton>
                ) : croppedPreview ? (
                  <>
                    <ProfileModalButton onClick={(e) => handleUpload(e)}>
                      이 프로필 적용
                    </ProfileModalButton>
                    <ProfileModalButton
                      onClick={() => fileInputRef.current.click()}
                    >
                      다른 이미지로 변경
                    </ProfileModalButton>
                  </>
                ) : (
                  profile && (
                    <ProfileModalButton
                      onClick={() => fileInputRef.current.click()}
                    >
                      이미지 변경
                    </ProfileModalButton>
                  )
                )}
              </ProfileModalButtonContainer>
            </>
          </ProfileModal>
        </Backdrop>
      )}

      {isProfileCropModalOpen && (
        <ProfileModal>
          <ProfileModalHeader>
            <ProfileModalCloseButton
              onClick={() => onClickProfileCropClose()}
            ></ProfileModalCloseButton>
          </ProfileModalHeader>
          <ProfileModalTitle>자르기 및 회전</ProfileModalTitle>
          <ProfileCropModalContainer>
            <ProfileCropContainer>
              <Cropper
                image={preview}
                crop={crop}
                cropShape="rect"
                style={{
                  containerStyle: { backgroundColor: "white" }, // 컨테이너 배경색 변경
                  cropAreaStyle: {
                    border: "3px solid rgba(154, 160, 166)", // 크롭 테두리
                    backgroundColor: "rgba(0,0,0,0.5)",
                    maskImage:
                      "radial-gradient(circle, rgba(0,0,0,0.2) 69%, rgba(0,0,0,0.8) 31%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, rgba(0,0,0,0.2) 69%, rgba(0,0,0,0.8) 0%)",
                  },
                }}
                showGrid={true}
                zoom={zoom}
                rotation={rotation}
                cropSize={cropSize}
                aspect={1}
                minZoom={1}
                maxZoom={5}
                zoomSpeed={0.2}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
              />
              <ProfileCropOverlay cropSize={cropSize} />
            </ProfileCropContainer>
          </ProfileCropModalContainer>
          <ProfileModalButtonContainer>
            <ProfileModalRotateButton
              onClick={() => handleRotate()}
            ></ProfileModalRotateButton>
            <ProfileModalButton onClick={() => handleCrop()}>
              이미지 적용
            </ProfileModalButton>
          </ProfileModalButtonContainer>
        </ProfileModal>
      )}
    </>
  );
};

export default AccountManager_ProfileIMG_M;