import React from 'react'
import {spacing, uiGroups, fontSizes, screenSizes, borderRadii, borderSizes} from '../../utils/styleGuide'
import List from '../List'
import Anchor from '../Anchor'
import Image from '../Image'
import Icon from '../Icon'

export default ({visual, description, links, tags}) => (
  <div>

    {tags
      ? <div style={{
          marginBottom: spacing.medium,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {tags.map(tag => (
            <div 
              key={tag.label}
              style={{
                border: `${borderSizes.small}px solid ${tag.color}`,
                borderRadius: borderRadii.medium,
                color: tag.color,
                paddingTop: spacing.xsmall,
                paddingBottom: spacing.xsmall,
                paddingRight: spacing.medium,
                paddingLeft: spacing.medium,
                marginRight: spacing.small,
                marginBottom: spacing.small,
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                {tag.icon
                  ? <Icon
                      type={tag.icon}
                      fill={tag.color}
                      size={fontSizes.large}
                    />
                  : null
                }
                <div style={{
                  marginLeft: tag.icon ? spacing.small : 0,
                }}>
                  {tag.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      : null
    }

    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>

      {visual
        ? <div style={{
            marginBottom: spacing.xsmall,
            marginRight: spacing.large,
            maxWidth: 200,
          }}>
            {visual && visual.startsWith('/')
              ? <Image
                  src={visual}
                  description='Decorative image'
                  quiet
                />
              : <Icon
                  type={visual}
                  fill={uiGroups.userCurrentState}
                  style={{
                    color: uiGroups.userCurrentState
                  }}
                  size={70}
                />
            }
          </div>
        : null
      }

      <div style={{
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: screenSizes.small,
      }}>
        <div>
          {description}
        </div>
        {links
          ? <div style={{
              marginTop: spacing.small,
            }}>
              <List
                items={links.map((link) => (
                  <span
                    key={link.href}
                    style={{
                      fontSize: fontSizes.large,
                    }}
                  >
                    <Anchor href={link.href}>
                      {link.description}
                    </Anchor>
                  </span>
                ))}
                type='link'
              />
            </div>
          : null
        }
      </div>

    </div>

  </div>
)
