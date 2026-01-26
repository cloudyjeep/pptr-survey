import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// SurveyJS imports (install survey-core + survey-react-ui)
import {
  lazyLoadChoice,
  SurveyViewer,
} from '@/components/survey/survey-viewer';
import { useState } from 'react';
import { useInterval } from 'react-use';
import { DataCustomer } from '../maintenance/data/customer';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Surveys',
    href: '/surveys',
  },
];

const useDevMode = () => {
  const getValue = () => {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('edtr'));
    } catch (e) {}
    return {};
  };

  const [value, setValue] = useState(getValue);
  const [name, setName] = useState('backup');

  useInterval(() => {
    const d = new Date();
    setName((name) => `backup-${d.getHours()}`);
  }, 1000 * 10);

  const component = (
    <div className="flex justify-center gap-3 py-1">
      <button className="w-28 rounded ring" onClick={() => setValue(getValue)}>
        Update
      </button>
      <input
        className="rounded bg-input"
        value={name}
        onInput={(e) => setName((e.target as any).value)}
      ></input>
      <button
        className="w-28 rounded ring"
        children="Save"
        onClick={() => {
          localStorage.setItem(name, JSON.stringify(value));
        }}
      />
    </div>
  );
  return {
    value,
    component,
  };
};

export default function Surveys({ surveyJson }: { surveyJson: any }) {
  const { value, component } = useDevMode();

  // useEffect(() => {
  //   const t = setInterval(() => {
  //     try {
  //       // @ts-ignore
  //       const newValue = JSON.parse(localStorage.getItem('edtr'));
  //       setValue(newValue);
  //     } catch (e) {}
  //   }, 1000);
  //   return () => clearInterval(t);
  // }, []);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Surveys" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-b-xl">
        {component}
        <div className="relative min-h-[40vh] flex-1 overflow-hidden border-0 border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
          {surveyJson ? (
            // <SurveyEditor json={surveyJson} />
            // <SurveyViewer json={sample} />
            <SurveyViewer
              json={value}
              lazyload={[
                lazyLoadChoice('npa', (keyword: string) => {
                  return DataCustomer.filter((v) =>
                    `${v.npa} ${v.name} ${v.kelurahan} ${v.perumahan}`
                      .toLowerCase()
                      .includes(keyword),
                  )
                    .slice(0, 100)
                    .map((v) => ({
                      value: String(v.npa),
                      text: `${v.npa} - ${v.name} → (${v.kelurahan} - ${v.perumahan})`,
                    }));
                }),
              ]}
              onChange={(sender, options) => {
                if (options.name === 'npa') {
                  const selected = DataCustomer.find(
                    (u) => String(u.npa) === options.value,
                  );

                  if (selected) {
                    sender.setValue('p_npa', selected.npa);
                    sender.setValue('p_telp', selected.telp);
                    sender.setValue('p_name', selected.name);
                    sender.setValue('p_kecamatan', selected.kecamatan);
                    sender.setValue('p_kelurahan', selected.kelurahan);
                    sender.setValue('p_alamat', selected.alamat);
                    sender.setValue('p_perumahan', selected.perumahan);
                    sender.setValue('p_lat', selected.lat);
                    sender.setValue('p_long', selected.long);
                    sender.setValue(
                      'p_maps',
                      `https://www.google.com/maps?q=${selected.lat},${selected.long}`,
                    );
                  }
                }

                console.log([options.name, options.value, options]);

                if (options.name == 'Jumlah Anggota Keluarga Di Rumah') {
                  [
                    {
                      people: [2, 3, 4],
                      min: 100_000,
                      max: 200_000,
                    },
                    {
                      people: [4, 5, 6],
                      min: 200_000,
                      max: 350_000,
                    },
                    {
                      people: [7, 8],
                      min: 350_000,
                      max: 500_000,
                    },
                  ].map((v) => {
                    if (v.people.includes(Number(options.value))) {
                      sender.setValue('harga_min', v.min.toLocaleString());
                      sender.setValue('harga_max', v.max.toLocaleString());
                    }
                  });
                }
              }}
            />
          ) : (
            // <SurveyViewer
            //   json={{
            //     elements: [
            //       {
            //         type: 'file',
            //         name: 'foto',
            //         title: 'Upload Foto',
            //         acceptedTypes: 'image/*',
            //       },
            //     ],
            //   }}
            // />
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          )}
        </div>
      </div>
    </AppLayout>
  );
}

const sample = {
  completedHtmlOnCondition: [
    {
      expression: '{nps-score} <= 6 or {rebuy} = false',
      html: {
        default:
          "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
        fr: "Merci pour vos commentaires! Nous accordons une grande importance à toutes les idées et suggestions de nos clients, qu'elles soient positives ou critiques. À l'avenir, notre équipe pourrait vous contacter pour en savoir plus sur la façon dont nous pouvons encore améliorer notre produit afin qu'il dépasse vos attentes.",
      },
    },
    {
      expression: '{nps-score} = 6 or {nps-score} = 7',
      html: {
        default:
          'Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.',
        fr: "Merci pour vos commentaires. Notre objectif est de créer le meilleur produit possible, et vos réflexions, idées et suggestions jouent un rôle majeur pour nous aider à identifier les opportunités d'amélioration.",
      },
    },
    {
      expression: '{nps-score} >= 8',
      html: {
        default:
          "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience.",
        fr: "Merci pour vos commentaires. Nous sommes ravis d'entendre que vous avez apprécié notre produit. Vos commentaires nous aident à découvrir de nouvelles opportunités pour l'améliorer et vous assurer la meilleure expérience possible.",
      },
    },
  ],
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'rating',
          name: 'nps-score',
          title: {
            default:
              'On a scale from 0 to 10, how likely are you to recommend us to a friend or colleague?',
            fr: 'Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre produit à un ami ou à un collègue?',
          },
          rateMin: 0,
          rateMax: 10,
          minRateDescription: {
            default: 'Very unlikely',
            fr: 'Très improbable',
          },
          maxRateDescription: {
            default: 'Very likely',
            fr: 'Très probable',
          },
          rateDescriptionLocation: 'bottom',
        },
        {
          type: 'comment',
          name: 'disappointing-experience',
          visibleIf: '{nps-score} <= 5',
          title: {
            default:
              'How did we disappoint you and what can we do to make things right?',
            fr: "Nous n'avons pas été a la hauteur de vos attentes, comment pouvons-nous améliorer?",
          },
          maxLength: 300,
        },
        {
          type: 'comment',
          name: 'improvements-required',
          visibleIf: '{nps-score} >= 6',
          title: {
            default: 'What can we do to make your experience more satisfying?',
            fr: 'Que pouvons-nous faire pour rendre votre expérience plus satisfaisante?',
          },
          maxLength: 300,
        },
        {
          type: 'checkbox',
          name: 'promoter-features',
          visibleIf: '{nps-score} >= 9',
          title: {
            default: 'Which of the following features do you value the most?',
            fr: 'Laquelle des fonctionnalités suivantes appréciez-vous le plus ?',
          },
          description: {
            default: 'Please select no more than three features.',
            fr: 'Veuillez ne pas sélectionner plus de trois fonctionnalités.',
          },
          isRequired: true,
          choices: [
            {
              value: 'performance',
              text: 'Performance',
            },
            {
              value: 'stability',
              text: {
                default: 'Stability',
                fr: 'Stabilité',
              },
            },
            {
              value: 'ui',
              text: {
                default: 'User interface',
                fr: 'Interface utilisateur',
              },
            },
            {
              value: 'complete-functionality',
              text: {
                default: 'Complete functionality',
                fr: 'Ensemble des fonctionnalités',
              },
            },
            {
              value: 'learning-materials',
              text: {
                default:
                  'Learning materials (documentation, demos, code examples)',
                fr: "Matériel d'apprentissage (documentation, démos, exemples de code)",
              },
            },
            {
              value: 'support',
              text: {
                default: 'Quality support',
                fr: 'Accompagnement de qualité',
              },
            },
          ],
          showOtherItem: true,
          otherPlaceholder: {
            default: 'Please specify...',
            fr: 'Veuillez préciser...',
          },
          otherText: {
            default: 'Other features',
            fr: 'Autres fonctionnalités',
          },
          colCount: 2,
          maxSelectedChoices: 3,
        },
      ],
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'boolean',
          name: 'rebuy',
          title: {
            default: 'Would you buy our product again?',
            fr: 'Achèteriez-vous à nouveau notre produit?',
          },
        },
      ],
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'radiogroup',
          name: 'testimonial',
          title: {
            default:
              'Would you mind providing us a brief testimonial for the website?',
            fr: 'Accepteriez-vous de rédiger un bref commentaire pour notre site Internet?',
          },
          choices: [
            {
              value: 'yes',
              text: {
                default: 'Sure!',
                fr: 'Bien sur!',
              },
            },
            {
              value: 'no',
              text: {
                default: 'No',
                fr: 'Non merci.',
              },
            },
          ],
        },
        {
          type: 'text',
          name: 'email',
          visibleIf: "{testimonial} = 'yes'",
          title: {
            default: 'What is your email address?',
            fr: 'Quelle est votre adresse e-mail?',
          },
          validators: [
            {
              type: 'email',
            },
          ],
          placeholder: {
            default: 'Enter your email here',
            fr: 'Veuillez saisir votre adresse e-mail ici',
          },
        },
      ],
    },
  ],
  showPrevButton: false,
  completeText: {
    fr: 'Envoyer',
  },
  widthMode: 'static',
  width: '1000px',
};
