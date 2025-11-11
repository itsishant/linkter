-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpiresAt" TIMESTAMP(3);
