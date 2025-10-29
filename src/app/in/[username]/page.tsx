"use client"
import { buttonOutlineBlueStyle, containerStyle, iconStyle } from "@/styles/classnames";
import { ProfileSection } from "@/components/profile/profileSection";
import { ActivitiesContent } from "@/components/profile/content/activitiesContent";
import { LayoutProfileSection } from "@/components/profile/LayoutProfileSection";
import { Eye, Gem, Pen, Plus, X } from "lucide-react";
import { AboutContent } from "@/components/profile/content/aboutContent";
import { Button } from "@/components/ui/button";
import { AnalysisContent } from "@/components/profile/content/analysisContent";
import { ProfileItem } from "@/components/profile/item/profileItem";
import { NoDataItem } from "@/components/profile/item/noDataItem";
import { CertificatesContent } from "@/components/profile/content/certificatesContent";
import { CompetencesContent } from "@/components/profile/content/competencesContent";
import { ProfileAside } from "@/components/profile/profileAside";
import { ProfileSectionSkeleton } from "@/components/profile/skeletons/profileSectionSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { LoadingPage } from "@/components/loadingPage";
import { useProfileData } from "@/hooks/useProfileData";
import { useCompaniesData } from "@/hooks/useCompaniesData";
import { usernameLogged } from "@/data/profileData";

export default function Page() {
  const { username } = useParams();
  const isUserLogged = username === usernameLogged;

  const { user, allUsers, experiences, educations, certificates, skills, posts, isLoading } = useProfileData(username as string);
  const { isLoading: companyLoading, companies } = useCompaniesData();

  if (isLoading || companyLoading) {
    return <LoadingPage />
  }

  if (!isLoading && user === null) {
    return <div className="flex justify-center items-center h-full min-h-96">
      <p>Usuário não encontrado</p>
    </div>
  }

  return (
    <div className={containerStyle + " flex-col lg:flex-row justify-center items-start gap-2! lg:gap-5! min-h-screen pt-16 md:pt-20"}>
      <main className="flex flex-col gap-2 w-full rounded-lg mx-auto">
        {isLoading
          ? <ProfileSectionSkeleton />
          : <ProfileSection data={user!} />
        }
        <LayoutProfileSection
          sectionName="Sugestões para você"
          sectionDesc="Exibido apenas a você"
          SectionDescIcon={Eye}
          hasData
        />
        <LayoutProfileSection
          sectionName="Análise"
          sectionDesc="Exibido apenas a você"
          SectionDescIcon={Eye}
          sectionContent={<AnalysisContent />}
          hasData
        />
        <LayoutProfileSection
          sectionName="Sobre"
          Icon={Pen}
          sectionContent={isLoading ? (
            <AboutContent
              data={
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="w-full h-5 mb-2" />
                ))
              }
            />
          ) : user ? (
            <AboutContent
              data={user.about}
            />
          ) :
            <NoDataItem
              description="Adicione um texto sobre você"
              buttonText="Adicionar Sobre"
              noImage
            />
          }
          hasData={user !== null}
        />
        <LayoutProfileSection
          sectionName="Atividades"
          sectionLink="55 seguidores"
          sectionLinkHref="#"
          Icon={Pen}
          ButtonTop={
            <Button variant={"outline"} className={buttonOutlineBlueStyle}>Criar publicação</Button>
          }
          sectionContent={isLoading ? (
            <Skeleton />
          ) : posts && posts.length > 0 ? (
            <ActivitiesContent user={user!} data={posts} />
          ) :
            <NoDataItem
              description="Crie publicações"
              noImage
            />
          }
          hasData={!isLoading && posts !== null}
        />
        <LayoutProfileSection
          sectionName="Experiência"
          sectionDesc="Destaque suas conquistas e receba até 2x mais visualizações do perfil e conexões"
          Icon={X}
          sectionContent={isLoading ? (
            <ProfileItem
              title={<Skeleton className="w-28 h-4" />}
              description={<Skeleton className="w-20 h-4" />}
              subscription={<Skeleton className="w-28 h-4" />}
              ImageSrc={<Skeleton className="w-12 h-12 inline-block" />}
              buttonText={<Skeleton className="w-28 h-6" />}
            />
          ) : experiences && experiences.length > 0 ? (
            experiences.map((e, index) => {
              const company = companies?.find((c) => c.id === e.company_id);

              return (
                <ProfileItem key={index}
                  title={e.role}
                  description={company?.name}
                  subscription={`
                ${e.start_date} - ${e.end_date ?? 'o momento'}
                `}
                  ImageSrc={company?.avatar ?? "empty_avatar.png"}
                  buttonText="Adicionar Experiência"
                />
              )
            })
          ) :
            <NoDataItem
              title="Cargo"
              description="Empresa"
              subscription="2023 - o momento"
              buttonText="Adicionar Experiência"
            />
          }
          hasData={!isLoading && experiences !== null}
        />
        <LayoutProfileSection
          sectionName="Formação acadêmica"
          ButtonTop={<div className={iconStyle}><Plus /></div>}
          Icon={Pen}
          sectionContent={isLoading ? (
            <ProfileItem
              title={<Skeleton className="w-28 h-4" />}
              description={<Skeleton className="w-20 h-4" />}
              subscription={<Skeleton className="w-28 h-4" />}
              ImageSrc={<Skeleton className="w-12 h-12 inline-block" />}
              buttonText={<Skeleton className="w-28 h-6" />}
            />
          ) : educations && educations.length > 0 ? (
            educations.map((e) => (
              <ProfileItem key={e.id}
                title={e.diploma}
                description={`${e.start_date} - ${e.end_date ?? 'o momento'}`}
                ImageSrc={"empty_avatar.png"}
                buttonLink="Github, CSS e mais 12 competências"
                ButtonLinkIcon={Gem}
              />
            ))
          ) :
            <NoDataItem
              title="Nome academia"
              description="Descrição da formação academica"
              subscription="2023 - o momento"
              buttonText="Adicionar Formação acadêmica"
            />
          }
          hasData={educations !== null}
          buttonDisplayAll={
            educations!.length > 2
              ? `Exibir todas as ${educations?.length} formações acadêmicas`
              : false
          }
        />
        <LayoutProfileSection
          sectionName="Licenças e certificados"
          ButtonTop={<div className={iconStyle}><Plus /></div>}
          Icon={Pen}
          sectionContent={isLoading ? (
            <CertificatesContent />
          ) : certificates ? (
            <CertificatesContent />
          ) :
            <NoDataItem
              title="Nome do certificado"
              description="Descrição do certificado"
              subscription="2023 - o momento"
              buttonText="Adicionar Formação acadêmica"
            />
          }
          hasData={certificates !== null}
          buttonDisplayAll={
            certificates!.length > 2
              ? `Exibir todas as ${certificates?.length} licenças e certificados`
              : false
          }
        />
        <LayoutProfileSection
          sectionName="Competências"
          ButtonTop={<div className={iconStyle}><Plus /></div>}
          Icon={Pen}
          sectionContent={isLoading ? (
            <CompetencesContent isLoading={true} />
          ) : skills && skills.length > 0 ? (
            <CompetencesContent data={skills} />
          ) :
            <NoDataItem />
          }
          hasData={skills !== null}
          buttonDisplayAll={`Exibir todas as 17 competências`}
        />
      </main>
      <ProfileAside data={allUsers!} username={username as string} />
    </div>
  )
}