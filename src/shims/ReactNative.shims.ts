/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TextStyle,
  TextProps,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInput,
  TextInputEndEditingEventData,
  GestureResponderEvent,
  AccessibilityRole,
  ActivityIndicatorProps,
  ViewProps,
  ImageProps,
  Insets,
  TargetedEvent,
  LayoutChangeEvent,
} from 'react-native';
export type Style_t = TextStyle;
export type Color_t = string;

export type Style_textAlign = TextStyle['textAlign'];
export type Style_textTransform = TextStyle['textTransform'];
export type Style_position = TextStyle['position'];
export type Style_overflow = TextStyle['overflow'];
export type Style_flexWrap = TextStyle['flexWrap'];
export type Style_size = number | string;

export type Text_ellipsizeMode = TextProps['ellipsizeMode'];
export type TextInput_keyPressEvent =
  NativeSyntheticEvent<TextInputKeyPressEventData>;

export type TextInput_autoCapitalize = TextInputProps['autoCapitalize'];
export type TextInput_ref = React.RefObject<TextInput>;
export type TextInput_textContentType = TextInputProps['textContentType'];
export type TextInput_editingEvent =
  NativeSyntheticEvent<TextInputEndEditingEventData>;
export type Event_pressEvent = GestureResponderEvent;
export type Event_targetEvent = NativeSyntheticEvent<TargetedEvent>;
export type Event_layoutEvent = NativeSyntheticEvent<LayoutChangeEvent>;

export type Web_target = ['_blank' | '_self' | '_parent' | '_top'];
export type Accessibility_role = AccessibilityRole;
export type ActivityIndicator_Size_t = ActivityIndicatorProps['size'];
export type View_edgeInsets = Insets;
