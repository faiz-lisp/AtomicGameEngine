//
// Copyright (c) 2014-2015, THUNDERBEAST GAMES LLC All rights reserved
// LICENSE: Atomic Game Engine Editor and Tools EULA
// Please see LICENSE_ATOMIC_EDITOR_AND_TOOLS.md in repository root for
// license information: https://github.com/AtomicGameEngine/AtomicGameEngine
//
import {ServiceLocatorType} from "./EditorExtensionServices";

// Singleton service locator that can be referenced
const serviceLocator = new ServiceLocatorType();
export default serviceLocator;

serviceLocator.initializeServices();
